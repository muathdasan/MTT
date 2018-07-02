namespace BigStore.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class customer : EntityBase
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public customer()
        {
            orders = new HashSet<order>();
        }

        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        //public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string username { get; set; }

        [Required]
        [StringLength(50)]
        public string password { get; set; }

        [Required]
        public string nameAr { get; set; }

        [Required]
        public string nameEn { get; set; }

        public string address { get; set; }

        [Required]
        [StringLength(100)]
        public string phone { get; set; }

        [StringLength(100)]
        public string email { get; set; }

        //[Required]
        //public string createby { get; set; }

        //public DateTime createdate { get; set; }

        //public string updateby { get; set; }

        //public DateTime? updatedate { get; set; }

        public DateTime? lastlogin { get; set; }

        public bool isactive { get; set; }

        //public bool? isdeleted { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<order> orders { get; set; }
    }
}
