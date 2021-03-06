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
    public class ClienteController : ControllerBase
    {
        private readonly concessionariaDbContext _context;

        public ClienteController(concessionariaDbContext context)
        {
            _context = context;
        }

        // GET: api/Cliente
        [HttpGet]
        public IEnumerable<Cliente> GetCliente()
        {
            return _context.Cliente;
        }

        // GET: api/Cliente/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCliente([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cliente = await _context.Cliente.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }

            return Ok(cliente);
        }

        // PUT: api/Cliente/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCliente([FromRoute] int id, [FromBody] Cliente cliente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cliente.Clienteid)
            {
                return BadRequest();
            }
            cliente.DtUpdate = DateTime.Now;

            _context.Entry(cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(cliente);
        }

        // POST: api/Cliente
        [HttpPost]
        public async Task<IActionResult> PostCliente([FromBody] Cliente cliente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            cliente.DtRecord = DateTime.Now;
            cliente.DtUpdate = DateTime.Now;

            _context.Cliente.Add(cliente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCliente", new { id = cliente.Clienteid }, cliente);
        }

        // DELETE: api/Cliente/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCliente([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cliente = await _context.Cliente.FindAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Cliente.Remove(cliente);
            await _context.SaveChangesAsync();

            return Ok(cliente);
        }

        private bool ClienteExists(int id)
        {
            return _context.Cliente.Any(e => e.Clienteid == id);
        }
    }
}