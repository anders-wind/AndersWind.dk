using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AndersWind.dk.Models;

namespace AndersWind.dk.ViewModels
{
    public class ServiceViewModel : ViewModelBase
    {
        public ServiceViewModel(Service service) : base(service.Title, service.BackgroundColor, service.BackgroundColorFocus)
        {
            Symbol = service.Symbol;
            Description = service.Description;
            Delay = service.Delay;
        }

        public string Symbol { get; set; }
        public string Description { get; set; }
        public string Delay { get; set; }
    }
}
