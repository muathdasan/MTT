using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigStore.Data.Entity
{
    public partial class users : EntityBase
    {
 
        public string username { get; set; }
        public string password { get; set; }
        public string nameAr { get; set; }
        public string nameEn { get; set; }
        public string email { get; set; }
 
         
        public  DateTime? lastlogin { get; set; }

        [DefaultValue(true)]
        public bool isactive { get; set; }

        [DefaultValue(false)]
        public bool isadmin { get; set; }
       
    }
}
