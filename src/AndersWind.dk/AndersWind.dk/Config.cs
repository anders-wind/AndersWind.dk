using AndersWind.dk.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AndersWind.dk
{
    public class Config
    {
        public ErrorViewModel GenericErrorViewModel { get; set; }
        public ErrorViewModel StatusCodeErrorViewModel { get; set; }
        public HomeViewModel HomeViewModel { get; set; }
    }
}
