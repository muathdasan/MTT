using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BigStore.Data
{
    public class SharedEnums
    {

        public enum Sizetype : int
        {
            notset = 0,
            pc = 1,
            g = 2,
            kg = 3
        }


        public enum Status : int
        {
            notset = 0,
            New = 1,
            Pending = 2,
            Delivered = 3
        }
    }
}
