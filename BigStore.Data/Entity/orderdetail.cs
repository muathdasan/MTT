namespace BigStore.Data
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class orderdetail : EntityBase
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        //public int Id { get; set; }

        public int? orderId { get; set; }

        public int? productId { get; set; }

        [StringLength(10)]
        public string price { get; set; }

        public int? quantity { get; set; }

        public virtual order order { get; set; }

        public virtual product product { get; set; }
    }
}
