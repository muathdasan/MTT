namespace BigStore.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MG_05_Catg : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.categoriess", newName: "categories");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.categories", newName: "categoriess");
        }
    }
}
