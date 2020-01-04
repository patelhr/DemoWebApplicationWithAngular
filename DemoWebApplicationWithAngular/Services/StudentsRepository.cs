using DemoWebApplicationWithAngular.Models.ApplicationClasses;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace DemoWebApplicationWithAngular.Services
{
    public class StudentsRepository : IStudentsRepository
    {
        const string studentsApiUrl = "https://localhost:44315/api/students";
        public async Task<List<StudentsAc>> GetStudents()
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //GET Method  
                HttpResponseMessage response = client.GetAsync(studentsApiUrl).Result;
                if (response.IsSuccessStatusCode)
                {
                    var res = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<List<StudentsAc>>(res);
                }
                else
                {
                    return new List<StudentsAc>();
                }
            }
        }
    }
}
