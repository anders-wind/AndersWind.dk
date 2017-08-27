using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AndersWind.dk.Models
{
    public class Project
    {
        public string Title { get; set; }
        public string BackgroundColor { get; set; }
        public string BackgroundColorFocus { get; set; }
        public string Id { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public string Client { get; set; }
        public Uri ClientLink { get; set; }
        public string Date { get; set; }
        public string Service { get; set; }
        public Uri ProjectLink { get; set; }
        public string ProjectLinkText { get; set; }
    }
}
