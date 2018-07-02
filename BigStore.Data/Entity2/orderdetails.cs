using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigStore.Data.Entity
{

    public partial class orderdetails : EntityBase
    { 
    
        public string price { get; set; }
        public int? quantity { get; set; }


        [ForeignKey("order")]
        public int? orderId { get; set; }

        public virtual order order { get; set; }

        [ForeignKey("product")]
        public int? productId { get; set; }
        public virtual product product { get; set; }
    }
}
