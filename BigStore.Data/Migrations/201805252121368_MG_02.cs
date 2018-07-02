namespace BigStore.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MG_02 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.products", "sizetype", c => c.Int());
            AddColumn("dbo.products", "size", c => c.Int());
        }
        
        public override void Down()
        {
            DropColumn("dbo.products", "size");
            DropColumn("dbo.products", "sizetype");
        }
    }
}
