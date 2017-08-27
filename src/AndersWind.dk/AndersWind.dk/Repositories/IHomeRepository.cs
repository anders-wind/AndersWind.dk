using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AndersWind.dk.Models;

namespace AndersWind.dk.Repositories
{
    public interface IHomeRepository
    {
        Home GetHome(int id);
    }
}
