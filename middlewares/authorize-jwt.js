export function authorize(roles = []) {
    return (req, res, next) => {
        const userRoles = req.user.role

        if (!roles.includes(userRoles)) {
            return res.status(403).json({
                error: 'Acesso Negado!',
                requiredRoles: roles,
                userRoles: req.user.role
            })
        }

        next()
    }
}