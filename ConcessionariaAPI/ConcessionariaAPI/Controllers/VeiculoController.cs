﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ConcessionariaAPI.Models;

namespace ConcessionariaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VeiculoController : ControllerBase
    {
        private readonly concessionariaDbContext _context;

        public VeiculoController(concessionariaDbContext context)
        {
            _context = context;
        }

        // GET: api/Veiculo
        [HttpGet]
        public IEnumerable<Veiculo> GetVeiculo()
        {
            return _context.Veiculo;
        }

        // GET: api/Veiculo/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetVeiculo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var veiculo = await _context.Veiculo.FindAsync(id);

            if (veiculo == null)
            {
                return NotFound();
            }

            return Ok(veiculo);
        }

        // PUT: api/Veiculo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVeiculo([FromRoute] int id, [FromBody] Veiculo veiculo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != veiculo.Veiculoid)
            {
                return BadRequest();
            }
            veiculo.DtUpdate = DateTime.Now;

            _context.Entry(veiculo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VeiculoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(veiculo);
        }

        // POST: api/Veiculo
        [HttpPost]
        public async Task<IActionResult> PostVeiculo([FromBody] Veiculo veiculo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            veiculo.DtRecord = DateTime.Now;
            veiculo.DtUpdate = DateTime.Now;

            _context.Veiculo.Add(veiculo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVeiculo", new { id = veiculo.Veiculoid }, veiculo);
        }

        // DELETE: api/Veiculo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVeiculo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var veiculo = await _context.Veiculo.FindAsync(id);
            if (veiculo == null)
            {
                return NotFound();
            }

            _context.Veiculo.Remove(veiculo);
            await _context.SaveChangesAsync();

            return Ok(veiculo);
        }

        private bool VeiculoExists(int id)
        {
            return _context.Veiculo.Any(e => e.Veiculoid == id);
        }
    }
}