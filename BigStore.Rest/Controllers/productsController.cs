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
using System.Threading.Tasks;
using BigStore.Data.DTOs;


namespace BigStore.Rest.Controllers
{

    [RoutePrefix("api/product")]
    public class productsController : ApiController
    {
        private BigStoreContext db = new BigStoreContext();

        // GET: api/product/getallproducts
        [HttpGet]
        [Route("getallproducts")]
        public IHttpActionResult GetAllProducts(int page = 1, int pageSize = 8)
        {
            IQueryable<product> query;

            query = db.products;


            var totalCount = query.Count();
            var totalPages = (int)Math.Ceiling((double)totalCount / pageSize);
 
            var paginationHeader = new
            {
                TotalCount = totalCount,
                TotalPages = totalPages
            };

            var skip = (page - 1) * pageSize;
            var results = query.OrderBy(i => i.Id).Skip(skip).Take(pageSize).ToList();

            System.Web.HttpContext.Current.Response.Headers.Add("X-Pagination", Newtonsoft.Json.JsonConvert.SerializeObject(paginationHeader));
            return Ok(results);
        }



        [HttpGet]
        [Route("totalofproduct")]
        public IHttpActionResult totalofproduct()
        {
            var totalCount = db.products.Count();
            return Ok(totalCount);
        }


        [HttpGet]
        [Route("totalofcustomer")]
        public IHttpActionResult totalofcustomers()
        {
            var totalCount = db.customers.Count();
            return Ok(totalCount);
        }

        // GET: api/products/getproduct
        [HttpGet]
        [Route("getproduct")]
        [ResponseType(typeof(product))]
        public IHttpActionResult GetProduct([FromUri]int id)
        {
            product product = db.products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // GET: api/products/findbycategoryid
        [HttpGet]
        [Route("findbycategoryid")]
        [ResponseType(typeof(product))]
        public IHttpActionResult FindByCategoryId(int id)
        {

            var Products = db.products.Where(r => r.categoryid == id).Take(4);


            if (Products == null)
            {
                return NotFound();
            }

            return Ok(Products);

        }




        [Route("AddProduct")]
        [ResponseType(typeof(product))]
        [HttpPost]
        public IHttpActionResult AddProduct([FromBody]product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.products.Add(product);
            db.SaveChanges();

            return Ok(product);
        }





        // PUT: api/products/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putproduct(int id, product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != product.Id)
            {
                return BadRequest();
            }

            db.Entry(product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!productExists(id))
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

        // POST: api/products
        [ResponseType(typeof(product))]
        public IHttpActionResult Postproduct(product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.products.Add(product);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = product.Id }, product);
        }

        // DELETE: api/products/5
        [ResponseType(typeof(product))]
        public IHttpActionResult Deleteproduct(int id)
        {
            product product = db.products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool productExists(int id)
        {
            return db.products.Count(e => e.Id == id) > 0;
        }
    }
}