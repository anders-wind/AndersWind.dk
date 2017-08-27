using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AndersWind.dk.Models;

namespace AndersWind.dk.ViewModels
{
    public class ProjectViewModel : ViewModelBase
    {
        public ProjectViewModel(Project project): base (project.Title, project.BackgroundColor, project.BackgroundColorFocus)
        {
            Id = project.Id;
            Category = project.Category;
            Description = project.Description;
            Image = project.Image;
            Client = project.Client;
            ClientLink = project.ClientLink;
            Date = project.Date;
            Service = project.Service;
            ProjectLink = project.ProjectLink;
            ProjectLinkText = project.ProjectLinkText;
        }

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
