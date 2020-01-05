using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DemoWebApplicationWithAngular.Models.ApplicationClasses;
using DemoWebApplicationWithAngular.Services;
using Microsoft.AspNetCore.Mvc;

namespace DemoWebApplicationWithAngular.Controllers
{
    [Route("api/students")]
    public class StudentsController : Controller
    {
        private readonly IStudentsRepository _studentsRepository;
        public StudentsController(IStudentsRepository studentsRepository)
        {
            _studentsRepository = studentsRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentsAc>>> GetStudents()
        {
            var students = await _studentsRepository.GetStudents();
            return Ok(students);
        }
    }
}