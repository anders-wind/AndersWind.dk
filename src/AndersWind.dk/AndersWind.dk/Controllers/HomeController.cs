using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AndersWind.dk.Repositories;
using AndersWind.dk.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace AndersWind.dk.Controllers
{
    public class HomeController : Controller
    {
        private IHomeRepository HomeRepository { get; }
        public HomeController(IHomeRepository homeRepository)
        {
            HomeRepository = homeRepository;
        }
        public IActionResult Index()
        {
            var homeModel = new HomeViewModel(HomeRepository.GetHome(1));
            return View(homeModel);
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
            return View();
        }

        [Route("Home/Error/{code}")]
        public IActionResult Error(int code)
        {
            return View();
        }
    }
}
