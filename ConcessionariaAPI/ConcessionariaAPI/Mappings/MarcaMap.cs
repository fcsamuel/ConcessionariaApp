using ConcessionariaAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConcessionariaAPI.Mappings
{
    public class MarcaMap : IEntityTypeConfiguration<Marca>
    {
        public void Configure(EntityTypeBuilder<Marca> entity)
        {
            entity.ToTable("marca");

            entity.Property(e => e.Marcaid).HasColumnName("marcaid");

            entity.Property(e => e.Descricao)
                .HasColumnName("descricao")
                .HasMaxLength(120);

            entity.Property(e => e.DtRecord)
                .HasColumnName("dt_record")
                .HasColumnType("date");

            entity.Property(e => e.DtUpdate)
                .HasColumnName("dt_update")
                .HasColumnType("date");
        }
    }
}
