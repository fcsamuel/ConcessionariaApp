using ConcessionariaAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConcessionariaAPI.Mappings
{
    public class LocacaoMap : IEntityTypeConfiguration<Locacao>
    {
        public void Configure(EntityTypeBuilder<Locacao> entity)
        {
            entity.ToTable("locacao");

            entity.Property(e => e.Locacaoid).HasColumnName("locacaoid");

            entity.Property(e => e.Clienteid).HasColumnName("clienteid");

            entity.Property(e => e.DtDevolucao)
                .HasColumnName("dt_devolucao")
                .HasColumnType("date");

            entity.Property(e => e.DtLocacao)
                .HasColumnName("dt_locacao")
                .HasColumnType("date");

            entity.Property(e => e.DtRecord)
                .HasColumnName("dt_record")
                .HasColumnType("date");

            entity.Property(e => e.DtUpdate)
                .HasColumnName("dt_update")
                .HasColumnType("date");

            entity.Property(e => e.Observacao)
                .HasColumnName("observacao")
                .HasMaxLength(300);

            entity.Property(e => e.Valorlocacao)
                .HasColumnName("valorlocacao")
                .HasColumnType("numeric(15,2)");

            entity.Property(e => e.Veiculoid).HasColumnName("veiculoid");

            entity.HasOne(d => d.Cliente)
                .WithMany(p => p.Locacao)
                .HasForeignKey(d => d.Clienteid)
                .HasConstraintName("locacao_clienteid_fkey");

            entity.HasOne(d => d.Veiculo)
                .WithMany(p => p.Locacao)
                .HasForeignKey(d => d.Veiculoid)
                .HasConstraintName("locacao_veiculoid_fkey");
        }
    }
}
