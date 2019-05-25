using ConcessionariaAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConcessionariaAPI.Mappings
{
    public class ClienteMap : IEntityTypeConfiguration<Cliente>
    {
        public void Configure(EntityTypeBuilder<Cliente> entity)
        {
            entity.ToTable("cliente");

            entity.Property(e => e.Clienteid).HasColumnName("clienteid");

            entity.Property(e => e.Contato)
                .HasColumnName("contato")
                .HasMaxLength(13);

            entity.Property(e => e.Cpf)
                .HasColumnName("cpf")
                .HasMaxLength(11);

            entity.Property(e => e.DtRecord)
                .HasColumnName("dt_record")
                .HasColumnType("date");

            entity.Property(e => e.DtUpdate)
                .HasColumnName("dt_update")
                .HasColumnType("date");

            entity.Property(e => e.Endereco)
                .HasColumnName("endereco")
                .HasMaxLength(120);

            entity.Property(e => e.Nome)
                .HasColumnName("nome")
                .HasMaxLength(102);
        }
    }
}
