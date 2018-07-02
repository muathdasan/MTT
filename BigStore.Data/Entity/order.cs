namespace BigStore.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using static BigStore.Data.SharedEnums;

    public partial class order : EntityBase
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public order()
        {
            orderdetails = new HashSet<orderdetail>();
        }

        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        //public int Id { get; set; }

        public int? customerId { get; set; }

        //public DateTime? createdate { get; set; }

        public DateTime? duedate { get; set; }

        public double? totalprice { get; set; }

        public Status status { get; set; }

        public string note { get; set; }

        //public DateTime? updateddate { get; set; }

        //[StringLength(50)]
        //public string updatedby { get; set; }

        [StringLength(10)]
        public string isactive { get; set; }

        //public bool? isdeleted { get; set; }

        public virtual customer customer { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<orderdetail> orderdetails { get; set; }
    }
}
