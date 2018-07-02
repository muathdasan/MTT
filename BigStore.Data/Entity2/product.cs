using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigStore.Data.Entity
{

    public partial class product : EntityBase
    {

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public product()
        {
            this.orderdetails = new HashSet<orderdetail>();
        }

 
        public string nameAr { get; set; }
        public string nameEr { get; set; }
        public string code { get; set; }
        public decimal price { get; set; }
   
        public string image_path { get; set; }


        [DefaultValue(false)]
        public bool isoffer { get; set; }


        public int? rate { get; set; }

        [ForeignKey("categoriess")]
        public int? categoryid { get; set; }
         

        public  categoriess categoriess { get; set; }
        
        public  ICollection<orderdetail> orderdetails { get; set; }
    }
}
