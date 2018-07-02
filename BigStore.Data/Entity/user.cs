namespace BigStore.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class user : EntityBase
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        //public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string username { get; set; }

        [Required]
        [StringLength(50)]
        public string password { get; set; }

        public string nameAr { get; set; }

        public string nameEn { get; set; }

        [StringLength(100)]
        public string email { get; set; }

        //public DateTime? createdate { get; set; }

        //public string createby { get; set; }

        public DateTime? lastlogin { get; set; }

        public bool? isactive { get; set; }

        public bool? isadmin { get; set; }

        //public bool? isdeleted { get; set; }
    }
}
