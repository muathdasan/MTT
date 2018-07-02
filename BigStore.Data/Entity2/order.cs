using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigStore.Data.Entity
{

    public partial class order : EntityBase
    {

         public order()
        {
            this.orderdetails = new HashSet<orderdetail>();
        }
          

        public DateTime? duedate { get; set; }
        public double? totalprice { get; set; }
        public Status status { get; set; }
        public string note { get; set; } 
        public string isactive { get; set; }
         
        [ForeignKey("customer")]
        public int? customerId { get; set; }

        public customer customer { get; set; }

        public ICollection<orderdetail> orderdetails { get; set; }
    }



    public enum Status
    {
        test1 = -1,
        test2 = 1,
        test3 = 2

    }
}

