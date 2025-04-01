FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /webapp

COPY ./service1/*.csproj ./
RUN dotnet restore

COPY ./service1/* .
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /webapp
COPY --from=build /webapp/out .
ENTRYPOINT ["dotnet","service1.dll"]