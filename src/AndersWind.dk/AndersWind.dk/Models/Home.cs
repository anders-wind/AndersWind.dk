using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using AndersWind.dk.ViewModels;

namespace AndersWind.dk.Models
{
    public class Home
    {
        public string Title { get; set; }
        public string BackgroundColor { get; set; }
        public string BackgroundColorFocus { get; set; }
        public string HeaderTitle { get; set; }
        public string HeaderImage { get; set; }

        public string MainTitle { get; set; }
        public string MainText { get; set; }
        public string ProfileImage { get; set; }

        public string AboutTitle { get; set; }
        public string AboutText { get; set; }

        public string ServicesTitle { get; set; }
        public IEnumerable<Service> ServicesCollection { get; set; }

        public IEnumerable<Project> ProjectCollection { get; set; }

        public bool HaveSecondWebsite { get; set; }
        public string SecondaryWebsiteText { get; set; }
        public string SecondaryWebsiteImage { get; set; }
        public Uri SecondaryWebsiteLink { get; set; }

        public string ContactTitle { get; set; }
        public string ContactText { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        [Phone]
        public string CellPhoneNumber { get; set; }

        public Uri FacebookUri { get; set; }
        public Uri TwitterUri { get; set; }
        public Uri LinkedInUri { get; set; }
        public Uri GooglePlusUri { get; set; }
    }
}
