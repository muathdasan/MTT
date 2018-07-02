namespace BigStore.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MG_Order_01 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.orders", "status", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.orders", "status", c => c.Int());
        }
    }
}
