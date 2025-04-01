var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapPost("/", () => "Hello from service 2");

app.Run();
