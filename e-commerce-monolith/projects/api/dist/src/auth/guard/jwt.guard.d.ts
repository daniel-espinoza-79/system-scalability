declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
declare class JwtAuthGuard extends JwtAuthGuard_base {
    handleRequest(err: any, user: any): any;
}
export default JwtAuthGuard;
