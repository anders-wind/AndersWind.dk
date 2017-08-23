using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AndersWind.dk.Controllers
{
    public class HomeController : Controller
    {
        private Config Config { get; }
        public HomeController(Config config)
        {
            Config = config;
        }
        public IActionResult Index()
        {
            return View(Config.HomeViewModel);
        }

        public IActionResult About()
        {
            return Error();
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            return Error();
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(Config.GenericErrorViewModel);
        }

        [Route("Home/Error/{code}")]
        public IActionResult Error(int code)
        {
            return View(Config.StatusCodeErrorViewModel);
        }
    }
}
