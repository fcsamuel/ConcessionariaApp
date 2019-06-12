using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace ConcessionariaAPI.Models
{
    public partial class Marca
    {
        public Marca()
        {
            Veiculo = new HashSet<Veiculo>();
        }

        public int Marcaid { get; set; }
        public string Descricao { get; set; }
        public DateTime? DtRecord { get; set; }
        public DateTime? DtUpdate { get; set; }

        [JsonIgnore]
        public ICollection<Veiculo> Veiculo { get; set; }
    }
}
