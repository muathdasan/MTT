namespace BigStore.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    using static BigStore.Data.SharedEnums;

    public partial class product : EntityBase
    {
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        //public product()
        //{
        //    orderdetails = new HashSet<orderdetail>();
        //}

        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        //public int Id { get; set; }

        [Required]
        public string nameAr { get; set; }

        [Required]
        public string nameEn { get; set; }

        [StringLength(10)]
        public string code { get; set; }

        public decimal price { get; set; }

        public int? starRating { get; set; }
         
        public Sizetype? sizetype { get ; set; }

        public int? size { get; set; }


        [StringLength(100)]
        public string imageUrl { get; set; }

        //public DateTime? createdate { get; set; }

        //public string createby { get; set; }

        [ForeignKey("categories")]
        public int? categoryid { get; set; }

        public bool? isoffer { get; set; }

        //public bool? isdeleted { get; set; }

        public  categories categories { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<orderdetail> orderdetails { get; set; }
    }
}
