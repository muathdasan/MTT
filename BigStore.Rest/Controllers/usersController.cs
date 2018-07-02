using BigStore.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BigStore.Rest.Controllers
{
    [RoutePrefix("api/user")]
    public class usersController : ApiController
    {

        private BigStoreContext db = new BigStoreContext();

        //public int Authenticate(string userName, string password)
        //{


        //    var user = db.users.Where(u => u.username == userName && u.password == password).Take(4);
        //    if (user != null && user.Id > 0)
        //    {
        //        return user.UserId;
        //    }
        //    return 0;
        //}


        [HttpGet]
        [Route("authenticate")]
        [ResponseType(typeof(user))]
        public IHttpActionResult Authenticate(string username, string password)
        {

            user _user = db.users.First(u => u.username == username && u.password == password);

            if (_user == null)
            {
                return NotFound();
            }

            return Ok(_user);
        }
    }
}