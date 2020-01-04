using DemoWebApplicationWithAngular.Models.ApplicationClasses;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DemoWebApplicationWithAngular.Services
{
    public interface IStudentsRepository
    {
        Task<List<StudentsAc>> GetStudents();
    }
}