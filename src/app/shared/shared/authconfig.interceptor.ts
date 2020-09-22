import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { ApiServiceService } from "../../services/api-service.service";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(private apiService: ApiServiceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.apiService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}