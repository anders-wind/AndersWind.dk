using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using AndersWind.dk.Models;

namespace AndersWind.dk.ViewModels
{
    public class HomeViewModel : ViewModelBase
    {
        public HomeViewModel(Home home) : base(home.Title, home.BackgroundColor, home.BackgroundColorFocus)
        {
            HeaderTitle = home.HeaderTitle;
            HeaderImage = home.HeaderImage;
            MainTitle = home.MainTitle;
            MainText = home.MainText;
            ProfileImage = home.ProfileImage;
            AboutTitle = home.AboutTitle;
            AboutText = home.AboutText;
            ServicesTitle = home.ServicesTitle;
            ServicesCollection = home.ServicesCollection.Select(service => new ServiceViewModel(service));
            ProjectCollection = home.ProjectCollection.Select(project => new ProjectViewModel(project));
            HaveSecondWebsite = home.HaveSecondWebsite;
            SecondaryWebsiteText = home.SecondaryWebsiteText;
            SecondaryWebsiteImage = home.SecondaryWebsiteImage;
            SecondaryWebsiteLink = home.SecondaryWebsiteLink;
            ContactTitle = home.ContactTitle;
            ContactText = home.ContactText;
            Email = home.Email;
            CellPhoneNumber = home.CellPhoneNumber;
            FacebookUri = home.FacebookUri;
            TwitterUri = home.TwitterUri;
            LinkedInUri = home.LinkedInUri;
            GooglePlusUri = home.GooglePlusUri;
        }
        public string HeaderTitle { get; set; }
        public string HeaderImage { get; set; }

        public string MainTitle { get; set; }
        public string MainText { get; set; }
        public string ProfileImage { get; set; }

        public string AboutTitle { get; set; }
        public string AboutText { get; set; }

        public string ServicesTitle { get; set; }
        public IEnumerable<ServiceViewModel> ServicesCollection { get; set; }

        public IEnumerable<ProjectViewModel> ProjectCollection { get; set; }

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
