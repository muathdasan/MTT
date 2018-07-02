using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static BigStore.Data.SharedEnums;

namespace BigStore.Data.DTOs
{
    public class ProductDTO
    {

        public int Id { get; set; }

        public string nameAr { get; set; }

        public string nameEn { get; set; }
        public string code { get; set; }

        public decimal price { get; set; }

        public int? starRating { get; set; }

        public Sizetype? sizetype { get; set; }

        public int? size { get; set; }
        public string imageUrl { get; set; }

        public int categoryid { get; set; }

        public bool? isoffer { get; set; }
    }
}
