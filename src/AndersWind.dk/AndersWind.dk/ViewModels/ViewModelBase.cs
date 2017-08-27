using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AndersWind.dk.ViewModels
{
    public class ViewModelBase
    {
        public ViewModelBase(string title, string backgroundColor, string backgroundColorFocus)
        {
            Title = title;
            BackgroundColor = backgroundColor;
            BackgroundColorFocus = backgroundColorFocus;
        }

        public string Title { get; set; }
        public string BackgroundColor { get; set; }
        public string BackgroundColorFocus { get; set; }
    }
}
