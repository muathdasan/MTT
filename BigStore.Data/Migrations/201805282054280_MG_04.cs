namespace BigStore.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MG_04 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.products", "nameEn", c => c.String(nullable: false));
            DropColumn("dbo.products", "nameEr");
        }
        
        public override void Down()
        {
            AddColumn("dbo.products", "nameEr", c => c.String(nullable: false));
            DropColumn("dbo.products", "nameEn");
        }
    }
}
