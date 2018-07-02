using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigStore.Data.Entity
{


    public partial class customers : EntityBase
    {
        

        public customers()
        {
            this.orders = new HashSet<order>();
        }

    
        public string username { get; set; }
        public string password { get; set; }
        public string nameAr { get; set; }
        public string nameEn { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
   
        public  DateTime? lastlogin { get; set; }

        [DefaultValue(true)]
        public bool isactive { get; set; }
 

         public virtual ICollection<order> orders { get; set; }
    }



}
