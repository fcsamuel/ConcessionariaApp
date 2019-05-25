using System;
using System.Collections.Generic;

namespace ConcessionariaAPI.Models
{
    public partial class Veiculo
    {
        public Veiculo()
        {
            Locacao = new HashSet<Locacao>();
        }

        public int Veiculoid { get; set; }
        public string Modelo { get; set; }
        public string Descricao { get; set; }
        public string Placa { get; set; }
        public int? Ano { get; set; }
        public decimal? Preco { get; set; }
        public decimal? Valorlocacao { get; set; }
        public DateTime? DtRecord { get; set; }
        public DateTime? DtUpdate { get; set; }
        public int? Marcaid { get; set; }

        public Marca Marca { get; set; }
        public ICollection<Locacao> Locacao { get; set; }
    }
}
