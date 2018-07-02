using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigStore.Data.Entity
{
    public partial class categoriess : EntityBase
    {
         
        public categoriess()
        {
            this.products = new HashSet<product>();
        }

      
        public string nameAr { get; set; }
        public string nameEn { get; set; }
        public string discriptionAr { get; set; }
        public string discriptionEn { get; set; }
        public string imagepath { get; set; }
 

         public virtual ICollection<product> products { get; set; }
    }
}
