using System.IO;
using AndersWind.dk.Models;
using Newtonsoft.Json;

namespace AndersWind.dk.Repositories
{
    public class HomeRepository : IHomeRepository
    {
        public Home GetHome(int id)
        {
            var data = JsonConvert.DeserializeObject<Home>(File.ReadAllText($"wwwroot/data{id}.json"));
            return data;
        }
    }
}
