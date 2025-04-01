FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /webapp

COPY ./service2/*.csproj ./
RUN dotnet restore

COPY ./service2/* .
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /webapp
COPY --from=build /webapp/out .
ENTRYPOINT ["dotnet","service2.dll"]