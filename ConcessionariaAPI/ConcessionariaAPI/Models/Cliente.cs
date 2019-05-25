using System;
using System.Collections.Generic;

namespace ConcessionariaAPI.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Locacao = new HashSet<Locacao>();
        }

        public int Clienteid { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Contato { get; set; }
        public string Endereco { get; set; }
        public DateTime? DtRecord { get; set; }
        public DateTime? DtUpdate { get; set; }

        public ICollection<Locacao> Locacao { get; set; }
    }
}
