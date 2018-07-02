namespace BigStore.Data
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class BigStoreContext : DbContext
    {
        public BigStoreContext()
            : base("name=BigStoreContext")
        {
        }

        public virtual DbSet<categories> categories { get; set; }
        public virtual DbSet<customer> customers { get; set; }
        public virtual DbSet<orderdetail> orderdetails { get; set; }
        public virtual DbSet<order> orders { get; set; }
        public virtual DbSet<product> products { get; set; }
        public virtual DbSet<user> users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<categories>()
                .Property(e => e.imagepath)
                .IsFixedLength();

            modelBuilder.Entity<categories>()
                .Property(e => e.createdby)
                .IsFixedLength();

            modelBuilder.Entity<categories>()
                .Property(e => e.updatedby)
                .IsFixedLength();

            modelBuilder.Entity<categories>()
                .HasMany(e => e.products)
                .WithOptional(e => e.categories)
                .HasForeignKey(e => e.categoryid);

            modelBuilder.Entity<customer>()
                .Property(e => e.phone)
                .IsFixedLength();

            modelBuilder.Entity<customer>()
                .Property(e => e.email)
                .IsFixedLength();

            modelBuilder.Entity<orderdetail>()
                .Property(e => e.price)
                .IsFixedLength();

            modelBuilder.Entity<order>()
                .Property(e => e.isactive)
                .IsFixedLength();

            modelBuilder.Entity<product>()
                .Property(e => e.code)
                .IsFixedLength();

            modelBuilder.Entity<product>()
                .Property(e => e.price)
                .HasPrecision(6, 2);

            modelBuilder.Entity<product>()
                .Property(e => e.imageUrl)
                .IsFixedLength();

            modelBuilder.Entity<user>()
                .Property(e => e.email)
                .IsFixedLength();
        }
    }
}
