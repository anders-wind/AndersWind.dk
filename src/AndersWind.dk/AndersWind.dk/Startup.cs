using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AndersWind.dk.ViewModels;
using Newtonsoft.Json;
using System.IO;

namespace AndersWind.dk
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var data = JsonConvert.DeserializeObject<HomeViewModel>(File.ReadAllText("wwwroot/data.json"));
            // Add framework services.
            services.AddSingleton(new Config()
            {
                HomeViewModel = data,
                GenericErrorViewModel = new ErrorViewModel() { BackgroundColor = data.BackgroundColor, BackgroundColorFocus = data.BackgroundColorFocus, HeaderImage = "../images/header5.jpg" },
                StatusCodeErrorViewModel = new ErrorViewModel() { BackgroundColor = data.BackgroundColor, BackgroundColorFocus = data.BackgroundColorFocus, HeaderImage = "../images/header5.jpg", ErrorMessage = "The page you tried to access did not exist" }
            });
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseStatusCodePagesWithReExecute("/Home/Error/{0}");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
