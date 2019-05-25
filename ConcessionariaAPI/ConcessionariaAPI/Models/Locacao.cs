using System;
using System.Collections.Generic;

namespace ConcessionariaAPI.Models
{
    public partial class Locacao
    {
        public int Locacaoid { get; set; }
        public int? Clienteid { get; set; }
        public int? Veiculoid { get; set; }
        public string Observacao { get; set; }
        public decimal? Valorlocacao { get; set; }
        public DateTime? DtLocacao { get; set; }
        public DateTime? DtDevolucao { get; set; }
        public DateTime? DtRecord { get; set; }
        public DateTime? DtUpdate { get; set; }

        public Cliente Cliente { get; set; }
        public Veiculo Veiculo { get; set; }
    }
}
