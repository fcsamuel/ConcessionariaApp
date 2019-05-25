using ConcessionariaAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConcessionariaAPI.Mappings
{
    public class VeiculoMap : IEntityTypeConfiguration<Veiculo>
    {
        public void Configure(EntityTypeBuilder<Veiculo> entity)
        {
            entity.ToTable("veiculo");

            entity.Property(e => e.Veiculoid).HasColumnName("veiculoid");

            entity.Property(e => e.Ano).HasColumnName("ano");

            entity.Property(e => e.Descricao)
                .HasColumnName("descricao")
                .HasMaxLength(120);

            entity.Property(e => e.DtRecord)
                .HasColumnName("dt_record")
                .HasColumnType("date");

            entity.Property(e => e.DtUpdate)
                .HasColumnName("dt_update")
                .HasColumnType("date");

            entity.Property(e => e.Marcaid).HasColumnName("marcaid");

            entity.Property(e => e.Modelo)
                .HasColumnName("modelo")
                .HasMaxLength(120);

            entity.Property(e => e.Placa)
                .HasColumnName("placa")
                .HasMaxLength(8);

            entity.Property(e => e.Preco)
                .HasColumnName("preco")
                .HasColumnType("numeric(15,2)");

            entity.Property(e => e.Valorlocacao)
                .HasColumnName("valorlocacao")
                .HasColumnType("numeric(15,2)");

            entity.HasOne(d => d.Marca)
                .WithMany(p => p.Veiculo)
                .HasForeignKey(d => d.Marcaid)
                .HasConstraintName("veiculo_marcaid_fkey");
        }
    }
}
