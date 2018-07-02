using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BigStore.Data;
using static BigStore.Data.SharedEnums;

namespace BigStore.Rest.Controllers
{

    [RoutePrefix("api/order")]
    public class ordersController : ApiController
    {
        private BigStoreContext db = new BigStoreContext();

        // GET: api/order/getallorders
        [HttpGet]
        [Route("getallorders")]
        public IHttpActionResult getallorders(int page = 1, int pageSize = 1)
        {

            IQueryable<order> query;
            query = db.orders;


            var totalCount = query.Count();
            var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);


            var paginationHeader = new
            {
                TotalCount = totalCount,
                TotalPages = totalPages
            };

            var skip = (page - 1) * pageSize;

            var orders = (from order in db.orders
                          join customer in db.customers
                          on order.customerId equals customer.Id
                          select new
                          {
                              Id = order.Id,
                              Status = order.status,
                              TotallAmount = order.totalprice,
                              createdate = order.createdate,
                              Duedate = order.duedate,
                              Customer = customer.nameEn
                          }).OrderBy(i => i.Id).Skip(skip).Take(pageSize).ToList();

            System.Web.HttpContext.Current.Response.Headers.Add("X-Pagination", Newtonsoft.Json.JsonConvert.SerializeObject(paginationHeader));

            return Ok(orders);
        }



        [HttpGet]
        [Route("getrecentorders")]
        public IHttpActionResult getallordersnotCompleted()
        {

            var todaysDate = new DateTime(DateTime.Today.Year, DateTime.Today.Month, DateTime.Today.Day);

            var orders = (from order in db.orders
                          join customer in db.customers
                          on order.customerId equals customer.Id
                          select new
                          {
                              Id = order.Id,
                              Status = order.status,
                              TotallAmount = order.totalprice,
                              createdate = order.createdate,
                              Duedate = order.duedate,
                              Customer = customer.nameEn
                          }).Where(i => i.createdate == todaysDate).OrderByDescending(i => i.Id).Take(10).ToList();
                                         
            return Ok(orders);
        }




        [HttpGet]
        [Route("totaloforders")]
        public IHttpActionResult totaloforders()
        {
            var totalCount = db.orders.Count();
            return Ok(totalCount);
        }


        [HttpGet]
        [Route("getallordersnotCompleted")]
        public IHttpActionResult getallordersnotCompleted(int page = 1, int pageSize = 1)
        {

            List<order> query;
            query = db.orders.Where(i => i.status != Status.Delivered).ToList();

            var totalCount = query.Count();
            var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);

            var paginationHeader = new
            {
                TotalCount = totalCount,
                TotalPages = totalPages
            };

            var skip = (page - 1) * pageSize;

            var orders = (from order in db.orders
                          join customer in db.customers
                          on order.customerId equals customer.Id
                          select new
                          {
                              Id = order.Id,
                              Status = order.status,
                              TotallAmount = order.totalprice,
                              createdate = order.createdate,
                              Duedate = order.duedate,
                              Customer = customer.nameEn
                          }).Where(i => i.Status != Status.Delivered).OrderBy(i => i.Id).Skip(skip).Take(pageSize).ToList();

            System.Web.HttpContext.Current.Response.Headers.Add("X-Pagination", Newtonsoft.Json.JsonConvert.SerializeObject(paginationHeader));

            return Ok(orders);
        }





        // GET: api/orders/5
        [ResponseType(typeof(order))]
        public IHttpActionResult Getorder(int id)
        {
            order order = db.orders.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // PUT: api/orders/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putorder(int id, order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.Id)
            {
                return BadRequest();
            }

            db.Entry(order).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!orderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/orders
        [ResponseType(typeof(order))]
        public IHttpActionResult Postorder(order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.orders.Add(order);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = order.Id }, order);
        }

        // DELETE: api/orders/5
        [ResponseType(typeof(order))]
        public IHttpActionResult Deleteorder(int id)
        {
            order order = db.orders.Find(id);
            if (order == null)
            {
                return NotFound();
            }

            db.orders.Remove(order);
            db.SaveChanges();

            return Ok(order);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool orderExists(int id)
        {
            return db.orders.Count(e => e.Id == id) > 0;
        }
    }
}