namespace BigStore.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;


    public partial class categories : EntityBase
    {
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public categories()
        //{
        //    products = new HashSet<product>();
        //}

        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        //public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string nameAr { get; set; }

        [Required]
        [StringLength(50)]
        public string nameEn { get; set; }

        public string discriptionAr { get; set; }

        public string discriptionEn { get; set; }

        [StringLength(200)]
        public string imagepath { get; set; }

        //[Required]
        //[StringLength(10)]
        //public string cerateby { get; set; }

        //public DateTime createdate { get; set; }

        //[StringLength(10)]
        //public string updateby { get; set; }

        //public DateTime? updatedate { get; set; }

        //public bool? isdeleted { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<product> products { get; set; }
    }
}
