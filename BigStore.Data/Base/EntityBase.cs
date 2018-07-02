using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigStore.Data
{
    public class EntityBase
    {
        
        [Key]
        public int Id { get; set; } = -1;

        private DateTime? creatDate;
        public DateTime createdate
        {
            set
            { creatDate = value; }
            get
            {
                if (creatDate.HasValue)
                    return creatDate.Value;
                else
                    return DateTime.Now;

            }
        }

        private DateTime? updateDate;
        public DateTime updatedate
        {
            set
            { updateDate = value; }
            get
            {
                if (updateDate.HasValue)
                    return updateDate.Value;
                else
                    return DateTime.Now;

            }
        }
         
        public string createdby { get; set; }
        public string updatedby { get; set; }

        [DefaultValue(false)]
        public bool isdeleted { get; set; }

    }
}
